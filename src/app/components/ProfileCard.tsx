
type ProfileCardProps = {
  name: string;
  role: string;
  description: string;
};

export default function ProfileCard({
  name,
  role,
  description,
}: ProfileCardProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl max-w-sm text-center">
      <h2 className="text-2xl font-bold text-white mb-2">
        {name}
      </h2>

      <h3 className="text-blue-400 mb-4">
        {role}
      </h3>

      <p className="text-slate-300">
        {description}
      </p>
    </div>
  );
}

