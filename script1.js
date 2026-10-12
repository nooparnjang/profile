import { projects } from "./data1.js";

const projectList = document.querySelector("#projectList");
const projectDialog = document.querySelector("#projectDialog");
const projectDialogTitle = document.querySelector("#projectDialogTitle");
const projectDialogDescription = document.querySelector("#projectDialogDescription");
const projectDialogLink = document.querySelector("#projectDialogLink");

function createProjectCard(project, index) {
    const card = document.createElement("article");
    card.className = "proBox";

    const name = document.createElement("p");
    name.className = "proName";
    name.textContent = project.name;

    const divider = document.createElement("hr");
    divider.className = "nah";

    const actions = document.createElement("div");
    actions.className = "butt";

    const moreButton = document.createElement("button");
    moreButton.className = "projectMore";
    moreButton.type = "button";
    moreButton.dataset.projectIndex = String(index);
    moreButton.textContent = "MORE";
    moreButton.setAttribute("aria-label", `More about ${project.name}`);

    actions.append(moreButton);
    card.append(name, divider, actions);
    return card;
}

projectList.replaceChildren(...projects.map((project, index) => createProjectCard(project, index)));

projectList.addEventListener("click", (event) => {
    const moreButton = event.target.closest(".projectMore");
    if (!moreButton) return;

    const project = projects[Number(moreButton.dataset.projectIndex)];
    if (!project) return;

    projectDialogTitle.textContent = project.name;
    projectDialogDescription.textContent = project.description;
    projectDialogLink.href = project.link;
    projectDialog.showModal();
});

document.querySelector("#projectDialogClose").addEventListener("click", () => {
    projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
});