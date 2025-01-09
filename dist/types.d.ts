export interface IEmailDto {
    templateCode?: string;
    to?: string;
    subject: string;
    from?: string;
    bcc?: string;
    html?: string;
    data?: any;
    body?: string;
    attachments?: any[];
}
