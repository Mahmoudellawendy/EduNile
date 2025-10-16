export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-4">
        <input className="w-full border rounded p-2" placeholder="Full name" />
        <input className="w-full border rounded p-2" placeholder="Email" />
        <input className="w-full border rounded p-2" placeholder="Password" type="password" />
        <button className="w-full bg-yellow-400 text-black py-2 rounded">Create account</button>
      </form>
    </div>
  );
}
