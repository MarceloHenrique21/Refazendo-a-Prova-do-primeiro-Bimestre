import app from '../app'

function main () {
    try {
        app.listen(3001, 'localhost', () => {
            console.log('servidor iniciado na porta 3001');
        })
    } catch (err) {
        console.log('erro na iniciacao do servidor', err);
    }
}
main()