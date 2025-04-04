// You don't necessarily need to worry about this file for 

// yagayya
interface Post {
    id: number;
    title: string;
    description: string;
    creator: number; // user id
    subgroup: string;
    link?: string;
    timestamp: string;
  }
  
  let posts: Post[] = []; // your in-memory "database"
  
  
  export function getPostById(id: number): Post | undefined {
    return posts.find((p) => p.id === id);
  }
  
  export function deletePost(id: number): void {
    posts = posts.filter((p) => p.id !== id);
  }
  
  export function getAllPosts(): Post[] {
    return posts;
  }
  
  export function getPostsBySubgroup(subgroup: string): Post[] {
    return posts.filter((post) => post.subgroup === subgroup);
  }
  
  export function getAllSubgroups(): { name: string; postCount: number }[] {
    const subgroupMap: Map<string, number> = new Map();
  
    posts.forEach((post) => {
      const name = post.subgroup;
      subgroupMap.set(name, (subgroupMap.get(name) || 0) + 1);
    });
  
    return Array.from(subgroupMap.entries()).map(([name, postCount]) => ({
      name,
      postCount,
    }));
  }
  
  export { posts }; // optional export in case you want direct access elsewhere
  