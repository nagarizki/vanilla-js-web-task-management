// js/layout.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('Sidebar');
    const header = document.querySelector('.dashboard-nav');
    const username = localStorage.getItem('usernameLoggedIn') || 'User';

    if (sidebar) {
        sidebar.innerHTML = `
            <div class="flex justify-center">
                <img src="img/logo.svg" alt="logo">
            </div>
            <div class="general-menu flex flex-col gap-[18px]">
                <h3 class="font-semibold text-sm leading-[21px]">GENERAL</h3>
                <a href="dashboard-overview.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/3dcube.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Overview</p>
                </a>
                <a href="dashboard-my-people.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/profile-2user.svg" alt="icon">
                    </div>
                    <p class="font-semibold">My People</p>
                </a>
                <a href="tasks.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full bg-taskia-light-orange drop-shadow-[0_10px_20px_rgba(255,216,141,0.50)]">
                    <div class="w-6 h-6">
                        <img src="img/icons/note-favorite.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Manage Task</p>
                </a>
                <a href="dashboard-rewards.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/crown.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Rewards</p>
                </a>
                <a href="dashboard-ai-customs.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/hierarchy-square-3.svg" alt="icon">
                    </div>
                    <p class="font-semibold">AI Customs</p>
                </a>
            </div>
            <hr class="text-taskia-background-grey">
            <div class="general-menu flex flex-col gap-[18px]">
                <h3 class="font-semibold text-sm leading-[21px]">OTHERS</h3>
                <a href="dashboard-settings.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/setting-2.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Settings</p>
                </a>
                <a href="dashboard-help-center.html"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/message-question.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Help Center</p>
                </a>
                <a href="#" id="logoutBtn"
                    class="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey">
                    <div class="w-6 h-6">
                        <img src="img/icons/forbidden-2.svg" alt="icon">
                    </div>
                    <p class="font-semibold">Logout</p>
                </a>
            </div>
        `;
        
        const logoutBtn = sidebar.querySelector('#logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('usernameLoggedIn');
                window.location.replace('signin.html');
            });
        }
    }

    if (header) {
        header.innerHTML = `
            <div
                class="dashboard-search flex items-center p-[12px_20px] rounded-full border border-taskia-background-grey w-[400px] h-12 focus-within:ring-2 focus-within:ring-taskia-purple">
                <input type="text"
                    class="font-semibold placeholder:text-taskia-grey placeholder:font-normal focus:outline-none w-full"
                    placeholder="Search by report name..." name="name" required>
                <button class="ml-[10px] w-6 h-6 flex items-center justify-center">
                    <img src="img/icons/search-normal.svg" alt="icon">
                </button>
            </div>
            <div class="flex gap-[30px] items-center">
                <div class="flex gap-3 items-center">
                    <a href=""
                        class="flex justify-center items-center w-12 h-12 rounded-full border border-taskia-background-grey">
                        <img src="img/icons/direct.svg" alt="icon">
                    </a>
                    <a href=""
                        class="flex justify-center items-center w-12 h-12 rounded-full border border-taskia-background-grey">
                        <img src="img/icons/activity.svg" alt="icon">
                    </a>
                </div>
                <div class="flex h-12 border-x border-[0.5px] border-taskia-background-grey"></div>
                <div class="flex gap-3 items-center">
                    <div class="*:text-right flex flex-col">
                        <p class="text-taskia-grey text-sm w-full">Howdy,</p>
                        <p class="font-bold capitalize">${username}</p>
                    </div>
                    <div class="w-12 h-12 rounded-full overflow-hidden">
                        <img src="img/photo.png" class="object-cover h-full w-full" alt="photo">
                    </div>
                </div>
            </div>
        `;
    }
});
