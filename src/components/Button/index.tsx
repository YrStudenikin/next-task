import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type Children = string | JSX.Element | JSX.Element[];

type Props = {
  color?: "default" | "success" | "danger" | "dark";
  variant?: "default" | "link";
  size?: "default" | "large";
  displayType?: "inline" | "block";
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const defaultProps: Props = {
  color: "default",
  variant: "default",
  size: "default",
  displayType: "inline",
  type: "button",
};

const Button: React.FC<Props & { children: Children }> = ({
  color,
  variant,
  size,
  displayType,
  type,
  children,
  className,
  href,
  onClick,
  disabled,
}) => {
  const classes = clsx(styles.button, className, {
    [styles["button-success"]]: color === "success",
    [styles["button-danger"]]: color === "danger",
    [styles["button-dark"]]: color === "dark",
    [styles["button-link"]]: variant === "link",
    [styles["button-block"]]: displayType === "block",
    [styles["button-large"]]: size === "large",
    [styles["button-disabled"]]: disabled,
  });

  if (href && variant === "link") {
    //just native link
    // we can replace to next Link component if needed
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
