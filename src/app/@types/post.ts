export interface Post {
    id? : number;
    title: string;
    description: string;
    photo?: string;
    created_at?: string;
    update_at?: string;
    comments?: [{comment: string, username: string}]
}