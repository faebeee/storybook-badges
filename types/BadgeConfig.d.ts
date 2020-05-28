export interface BadgeConfig {
    badges?: string[];
    icon_size: number;
    available_badges: { [key: string]: { icon: string; text: string } };
}
