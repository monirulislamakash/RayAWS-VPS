import { ReactElement } from "react";
import { Button } from "../ui/button";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const SubmitX = ({
  pending = false,
  icon = null,
  text,
  className,
  action,
  disabled = false,
  variant = "default",
}: {
  pending: boolean;
  icon?: ReactElement | null | undefined;
  text?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  action?: Function;
  disabled?: boolean;
  variant?: "default" | "outline" | "destructive";
}) => {
  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={cn(className, "items-center gap-2")}
      onClick={() => action && action()}
      variant={variant}
    >
      {pending ? <Sun className="w-4 h-4 animate-spin text-white" /> : null}
      {/* <Sun className="w-4 h-4 animate-spin text-white" /> */}
      {text}
      {pending ? null : icon}
    </Button>
  );
};

export default SubmitX;