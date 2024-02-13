import store from "./store";

/* Оно используется для кастомных hooks, а так же может
 * использоваться для обращения на прямую.
 */
// Выведение типов `RootState` и `AppDispatch` из хранилища redux
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;