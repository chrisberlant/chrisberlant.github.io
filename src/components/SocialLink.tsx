import { buttonVariants } from "./ui/button";

interface SocialLinkProps {
    link: string;
    title: string;
    download?: string;
    children: React.ReactNode;
}

export default function SocialLink({
    link,
    title,
    download = undefined,
    children,
}: SocialLinkProps) {
    return (
        <a
            href={link}
            title={title}
            target="_blank"
            download={download}
            className={buttonVariants({ variant: "social", size: "icon" })}
        >
            {children}
        </a>
    );
}
