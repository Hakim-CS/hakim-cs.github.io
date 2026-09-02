interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ onClose }: CVModalProps) {
  // CV section is currently disabled.
  onClose?.();
  return null;
}
