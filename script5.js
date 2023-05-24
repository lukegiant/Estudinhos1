let turma = ['Lucas', 'Dianne', 'Paulo', 'Denise', 'Kalel', 'Alyne', 'Rayk', 'Afonso', 'Bruna'];
var notas = [7.5, 9.2, 8.7, 7.2, 6.8, 7.9, 4.5, 6.9, 9.9];


function deletarAluno(aluno) {
    var pos = turma.indexOf(aluno);
    turma.splice(pos, 1);
    console.log(pos);
    console.log(turma);
}

deletarAluno('Denise');

