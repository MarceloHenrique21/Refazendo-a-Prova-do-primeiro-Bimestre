import app from './app'

function main () {
    try {
        app.listen(300, 'localhost', () => {
            console.log('servidor iniciado na porta 3000')
        })     
    } catch (err) {
        console.log('erro na iniciacao do servidor', err)
    }
}
main()