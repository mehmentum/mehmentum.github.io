document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.tag;
            
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.blog-post-wrapper').forEach(wrapper => {
                if (tag === 'all' || wrapper.dataset.tags.includes(tag)) {
                    wrapper.style.display = '';
                } else {
                    wrapper.style.display = 'none';
                }
            });
        });
    });
});