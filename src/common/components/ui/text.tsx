import React from "react";

const sizes = {
  textXs: "text-[12px] font-normal",
  textS: "md:text-[14px] md:text-[12px]",
  textBase: "lg:text-[16px] font-normal text-[13px]",
  textLg: "md:text-[18px] font-normal sm:text-[15px]",
  textXl: "lg:text-[44px] font-light md:text-[40px] text-[37px]",
};

type TextProps = Partial<
  React.PropsWithChildren<{
    className: string;
    as: React.ElementType;
    size: keyof typeof sizes;
  }>
> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

function Text({
  className = "",
  as,
  size = "textBase",
  children,
  ...restProps
}: TextProps) {
  const Component = as || "p";
  return (
    <Component className={` ${sizes[size]} ${className}`} {...restProps}>
      {children}
    </Component>
  );
}

export default Text;
