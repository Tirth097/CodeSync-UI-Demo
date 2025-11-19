/* =======================================
   CodeSync Demo - Shared JavaScript File
   ======================================= */

/* Global Toast Message */
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

/* Sidebar active link handler */
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
});
