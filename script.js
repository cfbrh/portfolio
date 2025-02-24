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
    
    // 隐藏 "Read More" 按钮
    document.getElementById("readMoreBtn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");
    const readMoreBtn = document.getElementById("readMoreBtn");
    let defaultProjects = 6; // 只显示前6个项目
    let allProjects = [...projects]; // 存储所有项目

    function resetToDefault() {
        // 隐藏所有项目
        projects.forEach(project => project.classList.add("hidden"));

        // 只显示前6个项目
        allProjects.slice(0, defaultProjects).forEach(project => project.classList.remove("hidden"));

        // 重新显示 "Read More" 按钮
        if (allProjects.length > defaultProjects) {
            readMoreBtn.style.display = "block";
        } else {
            readMoreBtn.style.display = "none";
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            if (filter === "all") {
                resetToDefault(); // 复原到默认状态（前6个）
            } else {
                projects.forEach(project => {
                    if (project.querySelector(`.tag.${filter}`)) {
                        project.classList.remove("hidden");
                    } else {
                        project.classList.add("hidden");
                    }
                });

                // 计算筛选后项目数量
                let visibleProjects = document.querySelectorAll('.project:not(.hidden)');
                
                // 如果筛选后项目超过 6 个，显示 Read More 按钮
                // if (visibleProjects.length > defaultProjects) {
                //     readMoreBtn.style.display = "block";
                // } else {
                    readMoreBtn.style.display = "none";
                // }
            }
        });
    });

    // 初始状态：默认显示前6个项目
    resetToDefault();
});
