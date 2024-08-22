import { LoginRequest } from "../../../models/auth/LoginRequest";
import { LoginResponse } from "../../../models/auth/LoginResponse";
import { SignupRequest } from "../../../models/auth/SignupRequest";
import { User } from "../../../models/user/User";
import axiosInstance from "../AxiosInstance";

export class UserService {

    private currentUser: User | null = null;

    constructor(private http = axiosInstance) {
    }

    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        try {            
            const response = await this.http.post<LoginResponse>('User/login', loginRequest);
            return response.data;
        } catch (error) {      
            console.error("Login failed", error);
            throw error;
        }
    }

    async signup(signupRequest: SignupRequest): Promise<LoginResponse> {
        try{
            const response = await this.http.post<LoginResponse>('User', signupRequest);
            return response.data
        } catch (error) {
            console.log("Signup failed", error)
            throw error;
        }
    }

    async getCurrentUser(id: String): Promise<User>{
        try{
            const response = await this.http.get<User>(`User/${id}}`);
            return response.data;
        } catch (error) {
            console.log("Erro ao buscar user", error)
            throw error;
        }
    } 
}