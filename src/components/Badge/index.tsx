import React from "react";
import styles from './Badge.module.scss';
import clsx from "clsx";

export type BadgeVariant = 'new' | 'top';

type Props = {
    variant: BadgeVariant
}

const badgeLabel: Record<BadgeVariant, string> = {
    top: 'Top',
    new: 'New'
}

const Badge: React.FC<Props> = ({ variant }) => {
    const classes = clsx(styles['badge'], styles[`badge-${variant}`])

    return (
        <div className={classes}>
            <span>{badgeLabel[variant]}</span>
        </div>
    );
};

export default Badge;