import { User, Comment } from "../models";

const getUsers = async (): Promise<User[]> => {
    const resp = await fetch("http://localhost:8080/userAndPosts");
    const users = await resp.json() as User[];

    const comments = await getComments(1);
    console.log(`The comments: ` + comments);
    return users;
}

const getComments = async (postId: number): Promise<Comment[]> => {
    const resp = await fetch(`http://localhost:8080/comments?postId=${postId}`);
    const comments = await resp.json() as Comment[];
    return comments;
}

export default {
    getUsers: getUsers,
    getComments: getComments
}

// const postsUser1 = [
//     {
//         userId: 1,
//         id: 1,
//         title: "sunt1 aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui1 est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea1 molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: "eum1 et est occaecati",
//         body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//     },
// ]

// const postsUser2 = [
//     {
//         userId: 2,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         userId: 2,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         userId: 2,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
//     {
//         userId: 2,
//         id: 4,
//         title: "eum et est occaecati",
//         body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//     },
// ]

// function testUsers(): User[] | PromiseLike<User[]> {
//     return Promise.resolve([
//         {
//             id: 1,
//             name: 'testUser',
//             email: 'test@email',
//             username: 'testid',
//             posts: [...postsUser1],
//         },
//         {
//             id: 2,
//             name: 'testUser2',
//             email: 'test@email2',
//             username: 'testid2',
//             posts: [...postsUser2],
//         }
//     ] as User[]);
// }
