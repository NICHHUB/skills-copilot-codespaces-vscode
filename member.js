function skillsMember() {
    return {
        restict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindTocontroller: true,
        scope: {
            member: '='
        },
    };
}