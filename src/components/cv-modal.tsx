import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Nazari_CV.pdf';
    link.download = 'Nazari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>My CV</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        {/* PDF Preview */}
        <div className="flex-1 overflow-hidden rounded-lg bg-gray-900">
          <iframe
            src="/Nazari_CV.pdf"
            className="w-full h-full"
            title="CV Preview"
          />
        </div>
        
        {/* Download Button */}
        <div className="flex gap-2 mt-4">
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 w-full"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
