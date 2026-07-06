import { cloneTemplate } from "../lib/utils.js";

export function initTable(settings, onAction) {
    const { tableTemplate, rowTemplate, before, after } = settings;
    const root = cloneTemplate(tableTemplate);

    before.reverse().forEach(templateId => {
        root[templateId] = cloneTemplate(templateId);
        root.container.prepend(root[templateId].container);
    });

    after.forEach(templateId => {
        root[templateId] = cloneTemplate(templateId);
        root.container.append(root[templateId].container);
    });

    root.container.addEventListener('change', () => {
        onAction();
    });

    root.container.addEventListener('reset', () => {
        setTimeout(() => onAction(), 0);
    });

    root.container.addEventListener('submit', e => {
        e.preventDefault()
        onAction(e.submitter);
    });

    const render = (data) => {
        const nextRows = data.map(item => {
            const row = cloneTemplate(rowTemplate);
            Object.keys(item).forEach(key => {
                if (key in row.elements) {
                    const el = row.container.querySelector(`[data-name='${key}']`);
                    if (el.tagName === "INPUT" || el.tagName === "SELECT") {
                        el.value = item[key];
                    } else {
                        el.textContent = item[key];
                    }
                }
            });
            return row.container;
        });
        root.elements.rows.replaceChildren(...nextRows);
    }

    return { ...root, render };
}