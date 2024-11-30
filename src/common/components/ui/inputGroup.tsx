import * as React from "react";
import { cn } from "@/common/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  variant?: string;
  colorScheme?: string;
}

const inputVariants = cva("w-full flex items-center gap-2", {
  variants: {
    fill: {
      white: "bg-white text-gray-500",
      gray: "bg-gray-100 text-gray-500",
    },
    size: {
      xs: "h-[16px] px-3 text-[14px]",
      sm: "h-[36px] px-7 text-[14px]",
      md: "h-[48px] px-3.5 text-[14px]",
    },
    shape: {
      square: "rounded-[0]",
      rounded: "rounded-[24px]",
    },
  },
  defaultVariants: {},
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "fill",
      colorScheme = "gray",
      className,
      type,
      size = "md",
      shape,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ [variant]: colorScheme, size, shape }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex w-full items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
});
InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute aspect-square h-full left-0 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute aspect-square h-full right-0 flex items-center justify-center cursor-pointer",
        className
      )}
      {...props}
    >
      {children ? (
        children
      ) : (
        <X
          color="#9CA3AF"
          size={20}
          className="bg-gray-200 p-0.5 rounded-full"
        />
      )}
    </div>
  );
});
InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
