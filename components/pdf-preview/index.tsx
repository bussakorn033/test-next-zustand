import { GlobalWorkerOptions } from 'pdfjs-dist';
import { useEffect, useRef, useState } from 'react';
import { getDocument } from 'pdfjs-dist';
import type { RenderTask } from 'pdfjs-dist/types/src/display/api';
import { ExtractedField } from '@/dto/ContractDTO';

GlobalWorkerOptions.workerSrc = `${import.meta.env.VITE_PUBLIC_URL}/pdf.worker.min.mjs`;
// TODO: keep it for now, remove this line later.
// GlobalWorkerOptions.workerSrc = `/public/pdf.worker.min.mjs`;

interface Props {
	base64: string;
	onFieldsExtracted?: (fields: Record<string, ExtractedField[]>) => void;
}

export default function PdfViewer({ base64, onFieldsExtracted }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState<number | null>(null);
	const hasExtractedRef = useRef(false);
	const renderTaskRef = useRef<RenderTask | null>(null);
	const lastBase64Ref = useRef<string | null>(null);

	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};

		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	useEffect(() => {
		const render = async () => {
			if (!base64 || !canvasRef.current || !containerWidth) return;
			if (lastBase64Ref.current === base64) return;

			lastBase64Ref.current = base64;

			try {
				const binaryString = atob(base64);
				const len = binaryString.length;
				const bytes = new Uint8Array(len);
				for (let i = 0; i < len; i++) {
					bytes[i] = binaryString.charCodeAt(i);
				}

				const pdf = await getDocument({ data: bytes }).promise;

				const page = await pdf.getPage(1);

				if (onFieldsExtracted && !hasExtractedRef.current) {
					const annotations = await page.getAnnotations();

					const fields: Record<string, ExtractedField[]> = {};
					annotations.forEach(
						(ann: Partial<{ fieldName: string; fieldType?: string; fieldValue?: string }>) => {
							if (ann.fieldName) {
								fields[ann.fieldName] = [
									{
										fieldType: ann.fieldType ?? 'unknown',
										value: ann.fieldValue ?? ''
									}
								];
							}
						}
					);
					if (Object.keys(fields).length > 0) {
						hasExtractedRef.current = true;
						onFieldsExtracted(fields);
					}
				}

				const initialViewport = page.getViewport({ scale: 1 });
				const initialSharpness = 3;
				const scale = (containerWidth / initialViewport.width) * initialSharpness;
				const viewport = page.getViewport({ scale });
				const canvas = canvasRef.current!;
				const context = canvas.getContext('2d')!;
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				if (renderTaskRef.current) {
					renderTaskRef.current.cancel();
				}
				const renderTask = page.render({ canvasContext: context, viewport });
				renderTaskRef.current = renderTask;
				await renderTask.promise;
			} catch (err: unknown) {
				if (err instanceof Error && err.name !== 'RenderingCancelledException') {
					console.error('Error rendering PDF:', err);
				}
			}
		};

		render();
	}, [base64, containerWidth, onFieldsExtracted]);

	return (
		<div data-testid='COMPONENTS_PDF_VIEWER' ref={containerRef} style={{ width: '100%' }}>
			<canvas
				data-testid='COMPONENTS_PDF_VIEWER_CANVAS'
				ref={canvasRef}
				style={{ display: 'block', margin: '0 auto', width: '100%' }}
			/>
		</div>
	);
}
