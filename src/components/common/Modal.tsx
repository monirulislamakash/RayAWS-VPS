'use client'

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Modal({ children, trigger, title, className, open, setOpen }: { children: React.ReactNode, trigger: React.ReactNode, title: string, className?: string, open?: boolean, setOpen?: (open: boolean) => void }) {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn(className ? className : "sm:max-w-[425px]")}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
