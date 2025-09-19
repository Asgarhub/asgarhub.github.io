fetch('buttons.json')
  .then((res) => res.json())
  .then((data) => {
    const app = document.getElementById('app');

    data.sections.forEach((section) => {
      // Section title
      const h4 = document.createElement('h4');
      h4.className = 'text-title';
      h4.textContent = section.title;
      app.appendChild(h4);

      // Grid container
      const grid = document.createElement('div');
      grid.className = 'grid';
      app.appendChild(grid);

      // Buttons
      section.buttons.forEach((btn) => {
        const a = document.createElement('a');
        a.id = btn.id;
        a.href = btn.link;
        a.className = `btn ${btn.type}`;
        a.target = '_blank';
        a.rel = 'noopener';

        const img = document.createElement('img');
        img.className = `icon-wrapper ${btn.type === 'whatsapp' ? 'wa' : 'tg'}`;
        img.src = btn.icon;
        img.width = 32;
        a.appendChild(img);

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';

        const labelText = document.createElement('div');
        labelText.className = 'text-title';
        labelText.textContent = btn.label;

        labelDiv.appendChild(labelText);
        a.appendChild(labelDiv);

        grid.appendChild(a);
      });
    });
  });
