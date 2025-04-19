# ReactRouter.defer()

[Link udemy course](https://www.udemy.com/course/advanced-react/learn/lecture/40893146#overview)

Проблема: если мы грузим асинхронно данные в компоненте, то мы не можем отрожать полученные данные в компоненте, пока они не загрузятся. Это может привести к тому, что пользователь будет видеть пустой экран или индикатор загрузки, пока данные не будут загружены.

## What is ReactRouter.defer()?

The `ReactRouter.defer()` function is a utility provided by React Router that allows you to defer the loading of certain components or data until a later time. This can be useful for optimizing performance and improving the user experience in applications where you want to prioritize certain updates over others.

## Motivation for ReactRouter.defer()

The motivation for the `ReactRouter.defer()` function is to improve performance in React applications by allowing you to defer the loading of certain components or data until a later time. This can help reduce the amount of work the browser has to do during rendering, leading to a smoother user experience.
