import React from "react";
import TodoList from "../components/TodoList/TodoList";

interface userProps {
   userId: number;
}

export default function Home(props: userProps) {
   return (
      <>
         <TodoList userId={props.userId} />
      </>
   );
}
