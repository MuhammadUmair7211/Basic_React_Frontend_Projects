import { AlertCircleIcon } from "lucide-react";

const NotFound = () => {
	return (
		<div className="flex items-center text-zinc-300 justify-center min-h-screen">
			<div className="flex items-center gap-3">
				<AlertCircleIcon className="w-5 h-5" />
				<div className="flex-1">
					<p className="font-medium">Something went wrong.</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
