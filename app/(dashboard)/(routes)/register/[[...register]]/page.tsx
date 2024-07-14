import { SignUp } from "@clerk/nextjs";
//cant rename it to register cos its a component in clerk

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center">
      <SignUp />
    </div>
  );
}
