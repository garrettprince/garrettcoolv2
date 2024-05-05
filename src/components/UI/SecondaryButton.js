import React from "react";
import { useAtom } from "jotai";
import { dialogModalOpen } from "@/utils/store";

export default function SecondaryButton({ secondaryButtonTitle }) {
  const [dialogModal, setDialogModal] = useAtom(dialogModalOpen);

  return (
    <>
      <button
        onClick={() => setDialogModal(false)}
        className="m-4 px-4 py-1 text-white/75 active:text-white/50 hover:text-white/90 transition-all transform"
      >
        {secondaryButtonTitle}
      </button>
    </>
  );
}
