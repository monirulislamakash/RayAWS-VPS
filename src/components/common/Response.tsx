import { toast } from "sonner";

export default function Response({
    title = "",
    description = "",
    action,
    success,
}: {
    title: string;
    description?: string;
    action?: { label: string; onClick: () => void };
    success?: boolean;
}) {
    
    return success ? toast.success(title, { description, action }) : toast.error(title, { description, action });
}