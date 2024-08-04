$(document).ready(function() {
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<span class="material-icons">light_mode</span>';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode')
            ? '<span class="material-icons">light_mode</span>'
            : '<span class="material-icons">dark_mode</span>';
    });

    // Search functionality
    $('.search-icon').on('click', function() {
        $('#search-input').toggle();
        $('.clear-icon').toggle();
        $('#search-input').focus();
    });

    $('.clear-icon').on('click', function() {
        $('#search-input').val('').hide();
        $('.clear-icon').hide();
        $('.game-item').show();
    });

    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.game-item').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
