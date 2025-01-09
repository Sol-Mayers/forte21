import { makeAutoObservable, toJS } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { ClientsData } from "../modules/ClientsList/components/ClientsTable/types";

export default class Store {
    user = {} as IUser;

    itemIndex: number = 0;
    isAuth =
        localStorage.getItem("auth") &&
        JSON.parse(localStorage.getItem("auth")!).status === "true"
            ? true
            : false;

    isLoading = false;

    showActivationText = false;

    clients: ClientsData[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setItemIndex(item: number) {
        this.itemIndex = item;
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setActivationText(bool: boolean) {
        this.showActivationText = bool;
    }

    setClients(item: ClientsData) {
        this.clients.push(item);
    }

    deleteClient(id: string) {
        this.clients = this.clients.filter((item) => item.id !== id);
    }

    customizeCompany(id: string, value: string) {
        this.clients = this.clients.map((item) =>
            item.id === id
                ? {
                      ...item,
                      company: value,
                  }
                : item
        );
    }

    customizeName(id: string, value: string) {
        this.clients = this.clients.map((item) =>
            item.id === id
                ? {
                      ...item,
                      name: value,
                  }
                : item
        );
    }

    customizeContacts(id: string, value: string) {
        this.clients = this.clients.map((item) =>
            item.id === id
                ? {
                      ...item,
                      contacts: value,
                  }
                : item
        );
    }

    getSortedByNewClients(newClients: ClientsData[]) {
        let sortedClients = newClients.sort(function (a, b) {
            let c = new Date(a.dateTime.fullDateTime);
            let d = new Date(b.dateTime.fullDateTime);
            return Number(d) - Number(c);
        });
        this.clients = sortedClients;
        return sortedClients;
    }

    getSortedByOldClients(newClients: ClientsData[]) {
        let sortedClients = newClients.sort(function (a, b) {
            let c = new Date(a.dateTime.fullDateTime);
            let d = new Date(b.dateTime.fullDateTime);
            return Number(c) - Number(d);
        });
        this.clients = sortedClients;
        return sortedClients;
    }

    async sendUserInfo(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    status: "true",
                    role: response.data.user.role,
                })
            );
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    status: "true",
                    role: response.data.user.role,
                })
            );
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setUser(response.data.user);
            this.setActivationText(true);
            localStorage.setItem("showActivationText", "true");
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            localStorage.removeItem("auth");
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(
                `${API_URL}/refresh`,
                { withCredentials: true }
            );
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setUser(response.data.user);
            localStorage.setItem("activated", "true");
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
