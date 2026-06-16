import { User } from "@/types/generic-user"

function UserList({ users }: { users: User[] }) {
    return (
        <ul>
            {users.map((user) =>
                <li key={user.id}>Name:{user.name}</li>)}
        </ul>
    )
}

export default function Page() {

    const users: User[] = [
        { id: 1, name: "vanra" },
        { id: 2, name: "ly sovanra" }
    ];

    return <UserList users={users}/>
}