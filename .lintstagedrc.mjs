export default {
    // ts-check через arrow function, чтобы исключить аргументы,
    // которые передаёт lint-staged (имена staged-файлов).
    '*.ts|*.tsx': [() => 'npm run ts-check', 'npm run format-files'],
    '!(*.ts|*.tsx)': ['npm run format-files'],
};
