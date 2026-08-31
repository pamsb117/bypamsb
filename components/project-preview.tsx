"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ProjectPreviewProps = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tone: string;
  confidential: boolean;
};

export function ProjectPreview({ title, src, alt, width, height, tone, confidential }: ProjectPreviewProps) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Dialog onOpenChange={() => setZoomed(false)}>
      <DialogTrigger asChild>
        <button type="button" className={`project-visual preview-trigger ${tone}`} aria-label={`Ampliar captura de ${title}`}>
          <Image className="project-preview" src={src} alt={alt} width={width} height={height} sizes={confidential ? "100vw" : "(max-width: 760px) 100vw, 50vw"} />
          <span className="preview-hint"><ZoomIn aria-hidden="true" /> Ampliar captura</span>
        </button>
      </DialogTrigger>
      <DialogContent className="image-dialog" showCloseButton={false}>
        <div className="image-dialog-header">
          <div>
            <DialogTitle className="image-dialog-title">{title}</DialogTitle>
            <DialogDescription className="image-dialog-description">{confidential ? "Captura del proyecto de uso interno. Sin acceso al sistema ni a sus datos." : "Captura del proyecto. Puedes ampliarla para ver los detalles."}</DialogDescription>
          </div>
          <DialogClose className="image-dialog-close" aria-label="Cerrar captura"><X aria-hidden="true" /></DialogClose>
        </div>
        <div className="image-dialog-toolbar">
          <button type="button" className="image-zoom" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? <ZoomOut aria-hidden="true" /> : <ZoomIn aria-hidden="true" />}{zoomed ? "Ajustar a pantalla" : "Ver detalles"}</button>
          <span>{zoomed ? "Desliza la imagen para recorrerla." : "Amplía para leer los detalles."}</span>
        </div>
        <div className={`image-dialog-viewport${zoomed ? " is-zoomed" : ""}`} tabIndex={0} role="region" aria-label={`Captura de ${title}; usa las flechas para desplazarte al ampliar`}>
          <Image src={src} alt={alt} width={width} height={height} className="image-dialog-picture" style={zoomed ? { width, maxWidth: "none" } : undefined} draggable={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
