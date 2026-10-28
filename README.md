## Разработка и публикация пакета

1. Внеси изменения в UI-пакет.
2. Запусти `npx changeset`, выбери `ui`, укажи уровень версии (patch (v.v.V), minor (v.V.V), major (V.v.v)) и краткое описание.
3. Закоммить изменения вместе с созданным файлом из `.changeset/` и отправь их в `master`.
4. Changesets Action создаст или обновит PR **Version Packages**. Проверь в нём версию, `CHANGELOG.md` и удаление обработанного Changeset.
5. После слияния release PR Action опубликует новую версию в GitHub Packages.
