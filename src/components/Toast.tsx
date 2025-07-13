import { toast as sonnerToast } from "sonner";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast id={id} title={toast.title} description={toast.description} />
  ));
}

// eslint-disable-next-line react-refresh/only-export-components
function Toast(props: ToastProps) {
  const { title, description } = props;

  return (
    <div className="flex rounded-lg bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button?: {
    label: string | undefined;
    onClick: (() => void) | undefined;
  };
}
