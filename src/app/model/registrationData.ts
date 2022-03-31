export class RegistrationData {
    private name: string;
    private email: string;
    private password: string;
    private bio: string;
    
    constructor(name: string, email: string, password: string, bio: string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getBio(): string {
        return this.bio;
    }

}