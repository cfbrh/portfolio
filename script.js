// document.addEventListener("DOMContentLoaded", function() {
//     alert("欢迎来到我的个人主页！");
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copyEmail").addEventListener("click", function(event) {
        event.preventDefault(); // 阻止跳转
        const email = "wz2647@columbia.edu";

        navigator.clipboard.writeText(email).then(() => {
            const message = document.getElementById("copyMessage");
            message.style.display = "inline"; // 显示 "Copied!"

            setTimeout(() => {
                message.style.display = "none"; // 3 秒后隐藏
            }, 3000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
});

function showMoreProjects() {
    let hiddenProjects = document.querySelectorAll('.project.hidden');
    hiddenProjects.forEach(project => project.classList.remove('hidden'));
    
    // Hide the "Read More" button after revealing the projects
    document.getElementById("readMoreBtn").style.display = "none";
}


