export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface TreeNode {
  title: string;
  url?: string;
  children?: TreeNode[];
}
