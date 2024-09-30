import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";

export default function InviteUserForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement invitation logic here
        console.log("Inviting user:", email);
        // Reset the form
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm mb-3 font-medium text-gray-700">
                    Email address
                </label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-2 border-primary"
                    placeholder="Enter email address"
                    required
                />
            </div>
            <DialogClose>
                <Button type="submit" className="hover:bg-primary hover:contrast-200">Send Invitation</Button>
            </DialogClose>
        </form>
    );
}