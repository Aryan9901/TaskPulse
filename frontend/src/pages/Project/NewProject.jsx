export default function NewProject() {
  const [owner, setOwner] = useState("Aryan9901");
  const [repositoryName, setRepositoryName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    const formData = {
      owner,
      repositoryName,
      description,
      visibility,
    };

    console.log("Form data submitted:", formData);
    setFormSubmitted(true);

    // Reset form fields after submission
    setOwner("Aryan9901");
    setRepositoryName("");
    setDescription("");
    setVisibility("public");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-semibold">Create a new repository</h1>
          <p className="text-sm text-gray-500 mt-2">
            A repository contains all project files, including the revision
            history. Already have a project repository elsewhere?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Import a repository
            </a>
            .
          </p>
        </div>

        {/* Repository Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Owner and Repository Name */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4">
            <div className="flex-1">
              <label htmlFor="owner" className="block text-sm font-medium">
                Owner *
              </label>
              <div className="relative mt-2">
                <select
                  id="owner"
                  className="w-full border bg-background text-foreground border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                >
                  <option value="Aryan9901">Aryan9901</option>
                  <option value="anotherUser">anotherUser</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="repository" className="block text-sm font-medium">
                Repository name *
              </label>
              <input
                type="text"
                id="repository"
                className="w-full border bg-background text-foreground border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Enter repository name"
                value={repositoryName}
                onChange={(e) => setRepositoryName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description (optional)
            </label>
            <input
              type="text"
              id="description"
              className="w-full border bg-background text-foreground border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Visibility Options */}
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="public"
                name="visibility"
                type="radio"
                value="public"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={visibility === "public"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <label htmlFor="public" className="ml-3 text-sm font-medium">
                Public
              </label>
            </div>
            <div className="ml-7 text-sm text-gray-500">
              Anyone on the internet can see this repository. You choose who can
              commit.
            </div>

            <div className="flex items-center mt-4">
              <input
                id="private"
                name="visibility"
                type="radio"
                value="private"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={visibility === "private"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              <label htmlFor="private" className="ml-3 text-sm font-medium">
                Private
              </label>
            </div>
            <div className="ml-7 text-sm text-gray-500">
              You choose who can see and commit to this repository.
            </div>
          </div>

          {/* Create Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create repository
            </button>
          </div>
        </form>

        {/* Confirmation Message */}
        {formSubmitted && (
          <div className="mt-4 p-4 text-green-600 border border-green-600 rounded-md">
            Repository <strong>{repositoryName}</strong> has been created
            successfully!
          </div>
        )}
      </div>
    </main>
  );
}
