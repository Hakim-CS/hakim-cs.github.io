import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import cvAsset from "@/assets/My_CV.pdf.asset.json";


interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvAsset.url;
    link.download = cvAsset.original_filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] h-[95vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-2xl">My CV</DialogTitle>
        </DialogHeader>
        
        {/* PDF Preview */}
        <div className="flex-1 overflow-hidden bg-gray-950">
          <iframe
            src={cvAsset.url}
            className="w-full h-full"
            title="CV Preview"
          />
        </div>

        
        {/* Download Button */}
        <div className="border-t p-4 bg-background">
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 w-full sm:w-auto"
            size="lg"
          >
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
