export const Get_Data_Request: string = "Get_Data_Request";
export const Get_Data_Error: string = "Get_Data_Error";
export const Get_Data_Success: string = "Get_Data_Success";
export const POST_DATA_REQUEST: string = "POST_DATA_REQUEST";
export const Post_Data_Success: string = "Post_Data_Success";

export interface Item {
  userName: string;
  caption: string;
  tags: string[];
  createdAt: string;
  isVerified: boolean;
  comments: string[];
}
