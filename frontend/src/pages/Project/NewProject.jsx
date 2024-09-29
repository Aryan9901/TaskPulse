import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// For animations in the Select component
const animatedComponents = makeAnimated();

// Predefined categories (can be fetched dynamically)
const predefinedCategories = [
  { value: "Full Stack", label: "Full Stack" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Cloud", label: "Cloud" },
  { value: "AI/ML", label: "AI/ML" },
];

// Predefined tags (can be fetched dynamically)
const predefinedTags = [
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "CSS", label: "CSS" },
  { value: "HTML", label: "HTML" },
  { value: "API", label: "API" },
  { value: "Database", label: "Database" },
  { value: "UI/UX", label: "UI/UX" },
  { value: "DevOps", label: "DevOps" },
];

export default function NewProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [importMode, setImportMode] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [category, setCategory] = useState(""); // Category state
  const [tags, setTags] = useState([]); // Tags state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (importMode) {
      console.log("Importing repository from:", githubUrl);
    } else {
      const formData = {
        projectName,
        description,
        visibility,
        category,
        tags,
      };
      console.log("Form data submitted:", formData);
    }

    setFormSubmitted(true);

    // Reset form fields after submission
    setProjectName("");
    setDescription("");
    setVisibility("public");
    setGithubUrl("");
    setCategory("");
    setTags([]);
  };

  // Handle category change
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory ? selectedCategory.value : "");
  };

  // Handle tag selection
  const handleTagChange = (selectedTags) => {
    setTags(selectedTags ? selectedTags.map((tag) => tag.value) : []);
  };

  return (
    <main className="min-h-[82%] sm:min-h-[86.88%] flex items-center justify-center bg-white dark:bg-black text-foreground p-4">
      <div className="max-w-3xl w-full rounded-lg p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">
            {importMode ? "Import GitHub Repository" : "Create a new Project"}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {importMode
              ? "Import a GitHub repository to track its progress and tasks."
              : "A project contains all project files and tracks progress, tasks, and updates."}
            <button
              type="button"
              className="text-blue-600 hover:underline ml-2"
              onClick={() => setImportMode(!importMode)}
            >
              {importMode ? "Create a new project" : "Import from GitHub"}
            </button>
            .
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {importMode ? (
            // GitHub Import Section
            <div>
              <label htmlFor="github-url" className="block text-sm font-medium">
                GitHub Repository URL *
              </label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-gray-200 text-gray-700 border border-r-0 border-gray-300 rounded-l-md">
                  https://github.com/
                </span>
                <input
                  type="text"
                  id="github-url"
                  className="flex-1 w-full border bg-background text-foreground border-gray-300 rounded-r-md p-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="username/repository-name"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  required
                />
              </div>
            </div>
          ) : (
            // Create New Project Section
            <>
              <div>
                <label
                  htmlFor="repository"
                  className="block text-sm font-medium"
                >
                  Project Name *
                </label>
                <input
                  type="text"
                  id="repository"
                  className="w-full border bg-background text-foreground border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter repository name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  Description (optional)
                </label>
                <textarea
                  id="description"
                  className="w-full border bg-background text-foreground border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter a description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Category Selector using react-select */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium">
                  Category *
                </label>
                <Select
                  id="category"
                  options={predefinedCategories}
                  components={animatedComponents}
                  className="basic-single-select text-white"
                  classNamePrefix="select"
                  onChange={handleCategoryChange}
                  value={category ? { value: category, label: category } : null}
                  placeholder="Select a category"
                  noOptionsMessage={() => "No categories found"}
                  isClearable
                />
              </div>

              {/* Tags Input using react-select */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium">
                  Tags
                </label>
                <Select
                  id="tags"
                  isMulti
                  options={predefinedTags}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  className="basic-multi-select text-white"
                  classNamePrefix="select"
                  onChange={handleTagChange}
                  value={tags.map((tag) => ({ value: tag, label: tag }))}
                  placeholder="Select or search tags"
                  noOptionsMessage={() => "No tags found"}
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
                  <label
                    htmlFor="public"
                    className="ml-3 text-sm font-medium cursor-pointer"
                  >
                    Public
                  </label>
                </div>
                <div className="ml-7 text-sm text-gray-500">
                  Anyone on the internet can see this project. You choose who
                  can contribute.
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
                  <label
                    htmlFor="private"
                    className="ml-3 text-sm font-medium cursor-pointer"
                  >
                    Private
                  </label>
                </div>
                <div className="ml-7 text-sm text-gray-500">
                  You choose who can see and contribute to this project.
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {importMode ? "Import Project" : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
