import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
    const session = await getServerSession(authOptions);
    
    if(session?.user) {
        return <h2>Welcome to Admin {session?.user.username}</h2>
    }

    return <div>
       please login to admin page
    </div>
}

export default page;